class HashTable {
    constructor() {
        this.storage = [];
        this.bucket = 4;
    }

    printTable = () => {
        console.log('--- TABLE ---', this.storage);
    }

    hash = (key, max) => {
        let index = 0;
        if (key.length !== 0) {
            for (let char = 0; char < key.length; char++) {
                index = index + key.charCodeAt(char);
            }
        }

        return index % max;
    }

    add = (key, value) => {
        let index = this.hash(key, this.bucket);

        if (this.storage[index] === undefined) {
            this.storage[index] = [{
                "key": key,
                "value": value
            }];
        } else {
            let data = this.storage[index];
            let flag = false;
            for (let element of data) {
                if (element.key === key) {
                    element.value = value;
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                data.push({
                    "key": key,
                    "value": value
                });
            }
        }
    }

    remove = (key) => {
        let index = this.hash(key, this.bucket);
        if (this.storage[index] === undefined) {
            return false;
        } else {
            let data = this.storage[index];
            if (data.length === 1) {
                delete this.storage[index];
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (key === data[i]["key"]) {
                        delete data[i];
                        break;
                    }
                }
            }
            return true;
        }
    }

    lookup = (key) => {
        let index = this.hash(key, this.bucket);

        if (this.storage[index] === undefined) {
            return null;
        } else {
            let data = this.storage[index];
            if (data.length === 1) {
                return data[0]["value"];
            } else {
                for (let i = 0; i < data.length; i++) {
                    console.log('----I VALUE = ', data[i]);
                    if (data[i] !== undefined && data[i]['key'] !== undefined && data[i]['key'] === key) {
                        return data[i]['value'];
                    }
                }

                return null;
            }
        }
    }
}

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');

console.log(" LOOKUP VALUE =====> " + ht.lookup('tux'));
ht.remove('beau');
ht.remove('fido');
ht.add("sibi", "developer");
console.log(" LOOKUP VALUE =====> " + ht.lookup('tux'));
console.log(" LOOKUP VALUE =====> " + ht.lookup('sibi'));