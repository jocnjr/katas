//https://www.codewars.com/kata/meeting/javascript

const meeting = (s) => {
    let peopleArrObj =  s.toUppserCase().split(';').map(n => {
        const [name, firstLast] = person.split(':');
        return { name, firstLast }
    })

    peopleArrObj.sort((a,b) => {
        if (a.lastName === b.lastName) {
            return a.name.localeCompare(b.name);
        }

        return a.lastName.localeCompare(b.lastName);
    });

    return peopleArrObj.map(p => `(${p.lastName}, ${p.name})`).join('');

}

  console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));