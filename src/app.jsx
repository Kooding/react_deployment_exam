import { Component } from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id: 0,name: 'Reading', count: 0},
        {id: 1,name: 'Running', count: 0},
        {id: 2,name: 'Coding', count: 0},
    ]
  }

  onIncrement = (habit) => {
      /*-----------내가 한것----------------
      const newHabit = {...habit, count: habit.count++};

      const newHabits = [
              ...this.state.habits,
              newHabit
          ]
      

      this.setState(newHabits);
      --------------------------------------*/
      const habits = [...this.state.habits];
      
      const index = habits.indexOf(habit);
      habits[index].count++;
      
      this.setState({ habits });


  }
  onDecrement = (habit) => {
      const habits = [...this.state.habits];
      
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = habits[index].count - 1 < 0 ? 0 : count;
      
      this.setState({ habits });
      console.log(`decrease ${habit.name}`);

  }

  delete = (habit) => {
      const habits = this.state.habits.filter((value) => value.id !== habit.id)
      this.setState({habits});
      console.log(`delete ${habit.name}`);
  };

  onAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }

  onReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
     });
    this.setState({habits});
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habits={this.state.habits}
          onIncrement={this.onIncrement} 
          onDecrement={this.onDecrement} 
          onDelete={this.delete}
          onAdd={this.onAdd}
          onReset={this.onReset}
        />
      </>
    )
  }
  
  
}

export default App;
