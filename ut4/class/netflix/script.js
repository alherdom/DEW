class Episode {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.watched = false;
  }

  markAsWatched() {
    this.watched = true;
  }

  getEpisodeInfo() {
    return {
      title: this.title,
      duration: this.duration,
      watched: this.watched,
    };
  }
}

class Series {
  constructor(title, episodes) {
    this.title = title;
    this.episodes = episodes || [];
  }

  addEpisode(episode) {
    this.episodes.push(episode);
  }

  getSeriesInfo() {
    return {
      title: this.title,
      totalEpisodes: this.episodes.length,
    };
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.watchedEpisodes = [];
  }

  watchEpisode(episode) {
    episode.markAsWatched();
    this.watchedEpisodes.push(episode);
  }

  getWatchedInfo() {
    return this.watchedEpisodes.map((episode) => episode.getEpisodeInfo());
  }
}

// Example of usage
const episode1 = new Episode("Episode 1", 30);
const episode2 = new Episode("Episode 2", 25);

const series = new Series("Stranger Things", [episode1, episode2]);

const user = new User("John Doe");

user.watchEpisode(episode1);
user.watchEpisode(episode2);

console.log(user.getWatchedInfo());
console.log(series.getSeriesInfo());
