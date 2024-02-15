export default class HolidaysService {
    static async get_all() {
      const url = "https://public-holiday.p.rapidapi.com/2019/US";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "fa8a3a8ab5msh019e42a576fea46p11e26cjsn89dc17f8a7f2",
          "X-RapidAPI-Host": "public-holiday.p.rapidapi.com"
        }
      };
  
      const response = fetch(url, options);
      const result = response.text();
      console.log(result);
      return result;
    }
    catch(error) {
      console.error(error);
    }
  }
  