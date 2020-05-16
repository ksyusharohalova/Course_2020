const initData = {
    1: {
        image: 'https://englishfull.ru/wp-content/uploads/2017/10/harry-potter.jpg',
        name: 'Harry Potter and the Philosopher`s Stone',
        author: 'J. K. Rowling',
        plot: 'After murdering Harry`s parents, James and Lily Potter, evil Lord ' +
            'Voldemort puts a killing curse on Harry, then just a baby. The curse' +
            ' inexplicably reverses, defeating Voldemort and searing a lightning-bolt' +
            ' scar in the middle of the infant`s forehead. Harry is then left at the' +
            ' doorstep of his boring but brutish aunt and uncle, the Dursleys.\n' +
            'For 10 years, Harry lives in the cupboard under the stairs and is subjected' +
            ' to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. ' +
            'On his 11th birthday, Harry receives a letter inviting him to study magic ' +
            'at the Hogwarts School of Witchcraft and Wizardry.\n Harry discovers that ' +
            'not only is he a wizard, but he is a famous one. He meets two best friends,' +
            ' Ron Weasley and Hermione Granger, and makes his first enemy, Draco Malfoy.' +
            ' At Hogwarts the three friends are all placed into the Gryffindor house. Harry' +
            ' has a knack for the school sport, Quidditch, and is recruited onto the Gryffindor' +
            ' team as its star Seeker.\n Perusing the restricted section in the library, ' +
            'Harry discovers that the Sorcerer`s Stone produces the Elixir of Life, which ' +
            'gives its drinker the gift of immortality. After realizing that Voldemort might be ' +
            'after the stone, Albus Dumbledore had it moved it to Hogwarts for safekeeping.\n ' +
            'Harry finds out that when she died, Lily Potter transferred to her son an ancient' +
            ' magical protection from Voldemort`s lethal spells. This protection is what allowed' +
            ' Harry as an infant to survive Voldemort`s attack. It also helps Harry keep Voldemort' +
            ' from possessing the Stone, which Dumbledore agrees to destroy.\n'
    },
    2: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIlk2J6VLno6zWHaUbZD4h' +
            '_WSSQQMta4Yf7-C0G1xtiKWMC65S&usqp=CAU',
        name: 'Peter Pan',
        author: 'J. M. Barrie',
        plot: 'Peter Pan (also known as the Boy Who Wouldn\'t Grow Up or Peter and Wendy) is ' +
            'the story of a mischievous little boy who can fly, and his adventures on the island' +
            ' of Neverland with Wendy Darling and her brothers, the fairy Tinker Bell, the Lost Boys,' +
            ' the Indian princess Tiger Lily, and the pirate Captain Hook'
    },
    3: {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwyLWJqb6uYI1gjrzuYNeT_' +
            'zSWMXKsoUHxIY4rAuOaP58qFM1i&usqp=CAU',
        name: 'Snow White',
        author: 'Brothers Grimm',
        plot: 'This is the Fairytale story of  Snow White and the Seven Dwarfs.'
    }
};

localStorage.setItem('books', JSON.stringify(initData));