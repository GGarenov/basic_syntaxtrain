function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){ // obhojdame masiv1
        let firstWord = arr1[i]; // pravim go na dumi za da moje da gi sravnim
        for (let j = 0; j < arr2.length; j++){ // obhojdame 2riq masiv
            let secondWord = arr2[j]; // pravim go na dumi za da go sravnim
            if (firstWord === secondWord) { // ako sa ravni gi pechatame
                console.log(firstWord)
            }
        }
    }
    
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'] , ['Petar', 10, 'hey', 4, 'hello', '2'])