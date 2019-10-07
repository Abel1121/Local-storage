class DataStorage {
    /**
    * @param {string} key
    * @param {string} value
    */
    setItem(key, value){
          if (typeof value === "object") {
      value = JSON.stringify(value);
    }
        window.localStorage.setItem(key, value);
    }
    /**
    * @param {string} key
    * @param {string} defaultValue
    * @return {string}
    */
    getString(key, defaultValue = ""){
        const string = window.localStorage.getItem(key);
        if (string === null){
            return defaultValue;
        }
        return string;
    }
    /**
    * @param {string} key
    * @param {boolean} defaultValue
    * @return {boolean}
    */
    getBoolean(key, defaultValue = false){
        const boolean = window.localStorage.getItem(key, defaultValue)
        console.log(key, defaultValue, boolean)
         if (boolean != null){
             return JSON.parse(boolean)
         } return defaultValue
    } 

    /**
    * @param {string} key
    * @param {number} defaultValue
    * @return {number}
    */
    getNumber(key, defaultValue = 0){
       const number = window.localStorage.getItem(key, defaultValue);
        return Number.parseFloat(number)
    }

    /**
    * @param {string} key
    * @param {array} defaultValue
    * @return {array}
    */
    getArray(key, defaultValue = []){
        const array = window.localStorage.getItem(key, defaultValue)
        if (window.localStorage.getItem(key) === null ){
            return defaultValue
        } return JSON.parse(array)
    }

    /**
    * @param {string} key
    * @param {object} defaultValue
    * @return {object}
    */
    getObject(key, defaultValue = {}){
        const object = window.localStorage.getItem(key, defaultValue)
        return JSON.parse(object)
    }

    /**
    * @param {string} key
    */
    delete(key){
        window.localStorage.removeItem(key);
    }
}