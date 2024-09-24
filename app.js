const articles = [
    {
      id: 'art1',
      title: 'article',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!',
      author: 'Me',
    },
    {
      id: 'art2',
      title: 'article',
      content:
        'Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?',
      author: 'Me',
    },
    {
      id: 'art3',
      title: 'article',
      content:
        'Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.',
      author: 'Me',
    },
    {
      id: 'art4',
      title: 'article',
      content:
        'Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?',
      author: 'Me',
    },
    {
      id: 'art5',
      title: 'trailer',
      content:
        'Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit',
      author: 'Me',
    },
    {
      id: 'art6',
      title: 'trailer',
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
    {
      id: 'art7',
      title: 'trailer',
      content:
        'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
      author: 'Me',
    },
  ];

  for(let i = 0; i < articles.length; i++){
      let uuid = self.crypto.randomUUID();
  }

  const art = document.querySelector("input[type='button']");
  art.addEventListener('click', function (even){
    even.preventDefault();
    let title_a = document.getElementById("title");
    let content_a = document.getElementById("content");
    let author_a = document.getElementById("author");
    let zajawka_a = document.getElementById("zajawka");

    let artykul = {
      id: uuid,
      title: title_a,
      content: content_a,
      author: author_a
    };

    articles.unshift(artykul);

  })

  console.log(articles);
