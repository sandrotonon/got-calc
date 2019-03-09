import React, { Component } from 'react';
import './App.css';
import Scroll from 'react-scroll';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const episodesPerSeason = [10, 10, 10, 10, 10, 10, 7];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      season: 0,
      episode: 0
    };
  }

  createEpisodeList = () => {
    var episodes = [];

    for (var i = 0; i < episodesPerSeason[this.state.season]; i++) {
      episodes.push(
        this.createEpisodeButton(i)
      );
    }

    return episodes;
  }

  setCurrentSeason = season => {
    this.setState((state, props) => ({
      season: season
    }));

    Scroll.scroller.scrollTo('episodes', {
      duration: 1000,
      smooth: 'easeInOutCubic'
    });
  }

  setCurrentEpisode = episode => {
    this.setState((state, props) => ({
      episode: episode
    }));

    Scroll.scroller.scrollTo('timeleft', {
      duration: 1000,
      smooth: 'easeInOutCubic'
    });
  }

  createSeasonsList = () => {
    var seasons = [];

    for (var i = 1; i <= episodesPerSeason.length; i++) {
      seasons.push(
        this.createSeasonButton(i)
      );
    }

    return seasons;
  }

  createEpisodeList = () => {
    var episodes = [];

    for (var i = 1; i <= episodesPerSeason[this.state.season - 1]; i++) {
      episodes.push(
        this.createEpisodeButton(i)
      );
    }

    return episodes;
  }

  createSeasonButton = (seasonNumber) => {
    return <button
              className={this.state.season === seasonNumber ? 'active' : ''}
              key={'season-' + seasonNumber}
              onClick={() => this.setCurrentSeason(seasonNumber)}>
      {'Staffel ' + seasonNumber}
    </button>
  }

  createEpisodeButton = (episodeNumber) => {
    return <button
              className={this.state.episode === episodeNumber ? 'active' : ''}
              key={'episode-' + episodeNumber}
              onClick={() => this.setCurrentEpisode(episodeNumber)}>
      {'Folge ' + episodeNumber}
    </button>
  }

  getRemainingEpsisodeCount = () => {
    var remainingEpisodes = 0;

    for (var i = this.state.season - 1; i < episodesPerSeason.length; i++) {
      remainingEpisodes += episodesPerSeason[i];
    }

    return remainingEpisodes - this.state.episode;
  }

  getTimeleft = () => {
    var episodeCount = this.getRemainingEpsisodeCount();
    var releaseDate = moment('15.04.2019', 'DD.MM.YYYY');
    var yesterday = moment().subtract(1, 'days');
    var remainingDays = releaseDate.diff(yesterday, 'days')

    var zeitReicht = remainingDays / episodeCount;
    var aufzuholen = episodeCount % remainingDays;

    if (zeitReicht < 1) {
      return <p>Du musst pro Tag eine Folge schauen, musst aber {aufzuholen} Folgen aufholen</p>
    }
    if (zeitReicht > 1) {
      return <p>Wenn du pro Tag eine Folge schaust wirst du vor dem Staffelfinale fertig.</p>
    }
    if (zeitReicht === 1) {
      return <p>Wenn du pro Tag eine Folge schaust wirst du genau zum Staffelfinale fertig.</p>
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>GoT Calculator</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
          <meta name="msapplication-TileColor" content="#000000"/>
          <meta name="theme-color" content="#000000"/>
        </Helmet>
        <div className="section section-one">
          <h2>Aktuelle Staffel</h2>
          <div>
            {this.createSeasonsList()}
          </div>
        </div>
        <div className="section section-episodes" id="episodes">
          <h2>Zuletzt gesehene Folge</h2>
          <div>
            {this.state.season !== 0 &&
              this.createEpisodeList()
            }
            {this.state.season === 0 &&
              <p>Bitte wähle zunächst eine Staffel aus.</p>
            }
          </div>
        </div>
        <div className="section section-timeleft" id="timeleft">
          <h2>Anzahl verbleibende Folgen</h2>
          {this.state.season !== 0 && this.state.episode !== 0 &&
            this.getTimeleft()
          }
          {(this.state.season === 0 || this.state.episode === 0) &&
            <p>Bitte wähle zunächst eine Staffel und Folge aus.</p>
          }
        </div>
      </div>
    );
  }
}

export default App;
