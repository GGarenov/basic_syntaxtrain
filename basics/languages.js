function languages(input) {
    
    if (input == 'USA' || input == 'England') {
        console.log("English")
    } else if (input == 'Spain' || input == 'Argentina' || input == 'Mexico') {
        console.log("Spanish")
    } else {console.log("unknown")}
}

languages('USA');
languages('Spain');
languages('Bulgaria')
