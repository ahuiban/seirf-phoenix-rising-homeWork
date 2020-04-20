class TacoCondiment extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.tacoPartUpdate("condiment")}>
        <h2>
          <span>Condiment: </span>
          {this.props.condimentName}
        </h2>
        <p>{this.props.condimentRecipe}</p>
      </div>
    );
  }
}

class TacoMixin extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.tacoPartUpdate("mixin")}>
        <h2>
          <span>Mixin: </span>
          {this.props.mixinName}
        </h2>
        <p>{this.props.mixinRecipe}</p>
      </div>
    );
  }
}

class TacoShell extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.tacoPartUpdate("shell")}>
        <h2>
          <span>Shell: </span>
          {this.props.shellName}
        </h2>
        <p>{this.props.shellRecipe}</p>
      </div>
    );
  }
}

class TacoList extends React.Component {
  render() {
    console.log("taco props is:", this.props);
    if (this.props.shellName) {
      return (
        <div>
          <h5>
            Mix'n match. Don't like a particular option, click it to get a new
            one without changing the other choices
          </h5>
          <h4 onClick={() => this.props.handleSubmit()}>Another Random Taco</h4>
          <TacoShell
            tacoPartUpdate={this.props.tacoPartUpdate}
            shellName={this.props.shellName}
            shellRecipe={this.props.shellRecipe}
          />
          <TacoMixin
            tacoPartUpdate={this.props.tacoPartUpdate}
            mixinName={this.props.mixinName}
            mixinRecipe={this.props.mixinRecipe}
          />
          <TacoCondiment
            tacoPartUpdate={this.props.tacoPartUpdate}
            condimentName={this.props.condimentName}
            condimentRecipe={this.props.condimentRecipe}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h4 onClick={() => this.props.handleSubmit()}>Random Taco</h4>
        </div>
      );
    }
  }
}

class App extends React.Component {
  state = {
    URL: "http://taco-randomizer.herokuapp.com/random/?full-tack=true",
  };

  makeApiCall = () => {
    console.log("Ap - makeApiCall ");
    this.setState(
      {
        fetchURL: this.state.URL,
      },
      () => {
        fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")
          .then((response) => {
            return response.json();
          })
          .then(
            (json) =>
              this.setState({
                taco: json,
              }),
            (err) => console.log(err)
          );
      }
    );
  };

  //pass a tacoPart ("shell", "mixin", "condiment") and have just that part randomly updated
  updateTacoPart = (tacoPart) => {
    console.log("clicked shell update only");
    fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")
      .then((response) => {
        return response.json();
      })
      .then((json) =>
        this.setState(
          (prevState) => ({
            ...prevState,
            taco: {
              ...prevState.taco,
              [tacoPart]: {
                ...prevState.name,
                name: json[tacoPart].name,
                ...prevState.recipe,
                recipe: json[tacoPart].recipe,
              },
            },
          }),
          (err) => console.log(err)
        )
      );
  };

  render() {
    console.log("state is", this.state);
    if (this.state.taco) {
      return (
        <div className="App">
          <h1>Random Taco!</h1>
          <TacoList
            handleSubmit={this.makeApiCall}
            tacoPartUpdate={this.updateTacoPart}
            shellName={this.state.taco.shell.name}
            mixinName={this.state.taco.mixin.name}
            condimentName={this.state.taco.condiment.name}
            shellRecipe={this.state.taco.shell.recipe}
            mixinRecipe={this.state.taco.mixin.recipe}
            condimentRecipe={this.state.taco.condiment.recipe}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Random Taco!</h1>
          <TacoList handleSubmit={this.makeApiCall} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("main"));
