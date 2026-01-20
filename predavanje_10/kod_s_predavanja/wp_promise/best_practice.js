const ms = 1000;
const threshold = 0.5;

class UserDB {
    static is_from_EU(id) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve(true);
                else reject("Something went wrong (EU)");
            }, ms);            

        });

    }

    static is_legal_age(id) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve(true);
                else reject("Something went wrong (AGE)");
            }, ms);
        });
    }

    static get_username(id) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve("jmaltar")
                else reject("Something went wrong (USER)");            
            }, ms);
        });

    }
}


const get_user = async (id) => {
    /*
    const data_promise = Promise.all([ UserDB.get_username(id), UserDB.is_from_EU(id), UserDB.is_legal_age(id)]);
    const res = await data_promise;
    const [username, legal_age, from_EU] = res;
    return { username, legal_age, from_EU };
    */

    const [username, legal_age, from_EU] = await Promise.all([ UserDB.get_username(id), UserDB.is_from_EU(id), UserDB.is_legal_age(id)]);
    return { username, legal_age, from_EU };    
}

(async () => {
    try {
        const user = await get_user(0);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
})();

