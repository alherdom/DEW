class Usuario {
  constructor(handle) {
    this.handle = handle;
    this.siguiendo = [];
  }

  seguir(usuario) {
    if (usuario !== this && !this.siguiendo.includes(usuario)) {
      this.siguiendo.push(usuario);
    }
  }

  getHandle() {
    return this.handle;
  }

  getSiguiendo() {
    return this.siguiendo.map((usuario) => usuario.getHandle());
  }
}

class Tweet {
  constructor(handle, texto) {
    this.id = generateUniqueId();
    this.handle = handle;
    this.texto = texto;
    this.likes = [];
    this.retweets = [];
  }

  getHandle() {
    return this.handle;
  }

  getTexto() {
    return this.texto;
  }

  darLike(usuario) {
    const index = this.likes.findIndex((u) => u === usuario);
    if (index === -1) {
      this.likes.push(usuario);
    } else {
      this.likes.splice(index, 1);
    }
  }

  retweetear(usuario) {
    const index = this.retweets.findIndex((u) => u === usuario);
    if (index === -1) {
      this.retweets.push(usuario);
    } else {
      this.retweets.splice(index, 1);
    }
  }
}

class Twitter {
  constructor() {
    this.tweets = [];
  }

  twittear(tweet) {
    if (!this.tweets.includes(tweet)) {
      this.tweets.push(tweet);
    }
  }

  obtenerTimeline(usuario) {
    const timeline = [];

    const addToTimeline = (tweets) => {
      for (const tweet of tweets) {
        if (!timeline.some((existingTweet) => existingTweet.id === tweet.id)) {
          timeline.push(tweet);
        }
      }
    };

    usuario.getSiguiendo().forEach((u) => {
      addToTimeline(this.tweets.filter((t) => t.getHandle() === u));
      addToTimeline(
        this.tweets.filter((t) => t.likes.some((l) => l.getHandle() === u))
      );
      addToTimeline(
        this.tweets.filter((t) => t.retweets.some((r) => r.getHandle() === u))
      );
    });

    // Order timeline from newest to oldest
    timeline.sort((a, b) => b.id - a.id);

    return timeline;
  }
}

// Helper function to generate a unique ID for tweets
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Example usage:
const usuario1 = new Usuario("user1");
const usuario2 = new Usuario("user2");
const tweet1 = new Tweet("user1", "This is a tweet!");
const tweet2 = new Tweet("user2", "Another tweet!");

usuario1.seguir(usuario2);
usuario1.seguir(usuario1); // Trying to follow oneself (not allowed)
usuario1.seguir(usuario2); // Trying to follow the same user again (not allowed)

tweet1.darLike(usuario2);
tweet2.retweetear(usuario1);

const twitter = new Twitter();
twitter.twittear(tweet1);
twitter.twittear(tweet2);

const timeline = twitter.obtenerTimeline(usuario1);
console.log(timeline);
