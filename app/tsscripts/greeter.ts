/**
 * Created by ajacs on 1/10/14.
 */

function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
