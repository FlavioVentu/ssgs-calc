### 🎯 Description

A simple accademic CLI calculator in [Node.js](https://nodejs.org/en).

Currently it supports the following operators:

- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**
- **Power**

### 📜 Prerequisites

- **Node.js** ≥ `v20`
- **npm** (comes bundled with Node.js)
- [**Git**](https://git-scm.com/) (recommended)

To check if Node.js and git is installed

```bash
node -v
```

```bash
git -v
```

### 🔧 Installation

For Git, **clone** the project locally and **install dependencies** with npm

```bash
git clone https://github.com/FlavioVentu/ssgs-calc.git
cd ssgs-calc
npm ci
```

ℹ️ If you're not using a version control system like Git, you can download the project manually by clicking the "**Download ZIP**" button in the **Code** section. After extracting the archive, navigate into the project folder and run the installation commands as described above.

### 🎮 Usage

To run the CLI application just type and enter `npm start`.

The **menu** will display the available operators, each associated with a unique number. **Select** an option and enter the required numbers. If you enter an invalid character or input by mistake, the program will prompt you to **re-enter** a valid number. After displaying the **result**, you can perform another operation or simply exit.

### 🧪 Testing

This project uses [Jest](https://jestjs.io/) framework for testing.

To run the **test suite** and see the **coverage**

```bash
npm test
```

Coverage reports will be saved in the `tests/coverage` folder.

### ♾️ CI pipeline

This project includes a **GitHub Actions workflow** for continuous integration, which runs automatically on every pull request to the main branch. It executes the test suite, generates a code coverage report, and uploads the full report as an artifact for easy inspection. You can view the workflow execution and download artifacts directly from the [Actions tab](https://github.com/FlavioVentu/ssgs-calc/actions) on GitHub.
