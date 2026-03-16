function age(birth, death) {
    if (!death) {
        death = (new Date()).getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = age(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
