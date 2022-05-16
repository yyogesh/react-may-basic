// function Header(props) {
//     console.log(props)
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

function Header({ title }) {
    return (
        <header>
            <h1 className="App-link">{title}</h1>
        </header>
    )
}

export const API_PATH = 'http://localhost:3000/api/v1/'

export default Header;

