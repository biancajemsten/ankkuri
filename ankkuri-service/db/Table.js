class Table {
  constructor(tableName, docClient) {
    this.tableName = tableName;
    this.docClient = docClient;
  }

  async getItems(extraParams = {}) {
    const docClient = this.docClient;
    const params = {
      TableName: this.tableName,
      ...extraParams
    };
    try {
      const data = await new Promise((res, rej) => {
        docClient.query(params, (err, data) => {
          if (!err) {
            return res(data);
          }
          return rej(err);
        });
      });
      return data.Items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

class RemovableTable extends Table {
  constructor(tableName, docClient, key) {
    super(tableName, docClient);
    this.key = key;
  }

  _deleteRequest(params) {
    const request = new Promise((res, rej) => {
      this.docClient.delete(params, (error, data) => {
        if (error) {
          rej(error);
        } else {
          res(data);
        }
      });
    });
    return request;
  }

  async removeItemById(id) {
    try {
      const params = {
        TableName: this.tableName,
        Key: { [this.key.getId()]: id }
      };
      await this._deleteRequest(params);
    } catch (error) {
      console.error(error);
    }
  }

  async removeItem(item) {
    try {
      const params = {
        TableName: this.tableName,
        Key: this.key.getValue(item)
      };
      await this._deleteRequest(params);
    } catch (error) {
      console.error(error);
    }
  }

  async removeAllItems() {
    const items = await this.scanItems();
    items.forEach(item => {
      this.removeItem(item);
    });
  }
}

class Key {
  constructor(id) {
    this.id = id;
  }
  getValue(item) {
    return {
      [this.id]: item[this.id]
    };
  }
  getId() {
    return this.id;
  }
}

class SimpleRemovableTable extends RemovableTable {
  constructor(tableName, docClient, keyCode) {
    const key = new Key(keyCode);
    super(tableName, docClient, key);
  }
}

module.exports = {
  SimpleRemovableTable
};
