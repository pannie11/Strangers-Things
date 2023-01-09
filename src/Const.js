 const cohortName = '2209-FTB-ET-WEB-PT';
 const base_url = `https://strangers-things.herokuapp.com/api`
export const api_url = `${base_url}/${cohortName}`
export const jwt = localStorage.getItem('jwt') || 'N/A';