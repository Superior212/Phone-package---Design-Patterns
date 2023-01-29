class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.splice(this.phoneNumbers.indexOf(number), 1);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.indexOf(number) === -1) {
            console.log("Invalid phone number");
            return;
        }
        this.notifyObservers(number);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class Observer {
    constructor() {}
    update(number) {}
}

class PhoneNumberObserver extends Observer {
    update(number) {
        console.log(number);
    }
}

class DialingObserver extends Observer {
    update(number) {
        console.log(`Now Dialling ${number}`);
    }
}

const telephone = new Telephone();
const phoneNumberObserver = new PhoneNumberObserver();
const dialingObserver = new DialingObserver();
telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");
