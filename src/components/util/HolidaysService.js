async function getPublicHolidays(date) {
    const countryCode = "RU"
    const url = `https://date.nager.at/Api/v2/PublicHolidays/${date}/${countryCode}`;
  console.log(date);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const holidays = await response.json();
      return holidays;
    } catch (error) {
      console.error('There was a problem fetching the holidays:', error);
    }
  }

  export default getPublicHolidays