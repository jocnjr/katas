// https://www.codewars.com/kata/objectify-a-url-query-string/train/javascript

// Converts a URL Query String into an object map
const convertQueryToMap = (query) => {
  return query.split('&').reduce((out, item) => {
    const valueItem = item.split('=')[1];
    const arrItem = item.split('=')[0].split('.');

    console.log(arrItem);

    if (arrItem.length === 1) {
        out[arrItem[0]] = valueItem;
    } else {
        arrItem.forEach(key => {
            out[key] = valueItem;
        });
    }
    return out;
  }, {});
}


var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';

    
console.log(convertQueryToMap(q));

    // out = {
    //   'user': {
    //     'name': {
    //       'firstname': 'Bob',
    //       'lastname': 'Smith'
    //     },
    //     'favoritecolor': 'Light Blue'
    //   }
    // };