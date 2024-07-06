# Todo Application

This is a simple Todo application built with React, Redux Toolkit, and Tailwind CSS. The application allows users to manage their tasks efficiently by adding, updating, and deleting todos. It also supports filtering tasks based on their priority.

## Features

- **Add Todo**: Users can add new tasks with a title, description, and priority level (high, medium, low).
- **Update Todo**: Users can update the details of existing tasks, including the title, description, and priority level.
- **Delete Todo**: Users can delete tasks that are no longer needed.
- **Toggle Completion**: Users can mark tasks as completed or pending.
- **Filter Todos**: Users can filter tasks based on their priority level.
- **Dark Mode**: The application supports dark mode for a better user experience in low-light environments.

## Usage

1. **Add a Todo**:

   - Click on the "Add Todo" button.
   - Fill in the title, description, and select the priority level.
   - Click "Add" to save the task.

2. **Update a Todo**:

   - Click on the edit icon next to the task you want to update.
   - Modify the title, description, or priority level as needed.
   - Click "Update Todo" to save the changes.

3. **Delete a Todo**:

   - Click on the delete icon next to the task you want to remove.
   - Confirm the deletion.

4. **Toggle Completion**:

   - Click on the checkbox next to the task to mark it as completed or pending.

5. **Filter Todos**:
   - Use the filter dropdown to select the priority level you want to filter by.
   - Click "Clear Filter" to remove the filter and view all tasks.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app-redux.git
   cd todo-app-redux
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Radix UI**: A set of accessible and customizable UI components.
- **Lucide React**: A collection of simple and beautiful SVG icons.

## Project Structure

- `src/components`: Contains the React components used in the application.
- `src/redux`: Contains the Redux slices and API configuration.
- `src/pages`: Contains the main pages of the application.
- `src/App.tsx`: The main entry point of the application.
- `src/index.css`: The main CSS file for styling the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [MIT](https://opensource.org/licenses/MIT) file for details.
