const uuid = require("uuid");

const companies = [
    { id: uuid.v4(), name: "TechNova Solutions", employees: 250, marketCap: 1.2e9, country: "United States", countryCode: "US" },
    { id: uuid.v4(), name: "GreenEdge Innovations", employees: 1200, marketCap: 5.6e9, country: "Germany", countryCode: "DE" },
    { id: uuid.v4(), name: "FutureFoods Inc.", employees: 350, marketCap: 800e6, country: "Canada", countryCode: "CA" },
    { id: uuid.v4(), name: "UrbanGrid Systems", employees: 75, marketCap: 150e6, country: "Australia", countryCode: "AU" },
    { id: uuid.v4(), name: "HealthSphere Technologies", employees: 900, marketCap: 2.3e9, country: "United Kingdom", countryCode: "GB" },
    { id: uuid.v4(), name: "AeroDynamics Corp.", employees: 1500, marketCap: 7.8e9, country: "Japan", countryCode: "JP" },
    { id: uuid.v4(), name: "QuantumLogic Labs", employees: 50, marketCap: 600e6, country: "Switzerland", countryCode: "CH" },
    { id: uuid.v4(), name: "EcoVision Enterprises", employees: 300, marketCap: 1.1e9, country: "Netherlands", countryCode: "NL" },
    { id: uuid.v4(), name: "NextGen Robotics", employees: 450, marketCap: 3.4e9, country: "South Korea", countryCode: "KR" },
    { id: uuid.v4(), name: "SolarPioneers Ltd.", employees: 200, marketCap: 1.5e9, country: "India", countryCode: "IN" }
];

module.exports = { companies };