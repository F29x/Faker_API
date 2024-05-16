import express from 'express';
import faker from 'faker';

const app = express();
const port =3000;

function createUser() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

function createCompany() {
    return {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
}
app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});
app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});