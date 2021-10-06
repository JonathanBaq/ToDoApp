import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('when loading the To Do App', () => {
  test('To dos table renders correctly', () => {
    const initialList = [
      {
      date: '24.01.2021',
      description: 'Go to coffee',
      priority: 'Low'
      }
    ];

    render(<TodoList toDoList={initialList}/>);
    const tableCell = screen.getByText(/go to coffee/i);
    expect(tableCell).toBeInTheDocument();
  });
});