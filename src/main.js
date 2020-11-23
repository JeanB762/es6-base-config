import axios from 'axios';

class Api {
    static async getUserinfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);

            const data = response.data;
            console.log(data);
        } catch {
            console.warn("Invalid Username!!!");
        }
    }    
}

Api.getUserinfo('jeanb762000');
Api.getUserinfo('jeanb762');