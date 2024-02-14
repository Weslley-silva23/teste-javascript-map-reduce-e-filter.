const companies = [

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }
];

const marketvalueconpanys = companies.map((company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company;

}).filter((company) => company.foundedOn < 1990).reduce( (acc, company) => 
    acc + company.marketValue ,0)

console.log(marketvalueconpanys)
