import { HeaderStyled, HeaderIcon } from "./styled/StyledComponent"

const TodoHeader = ({ loading, themeToggler }) => {

	return (
		<HeaderStyled 
			className={`${!!loading && "loading"}` }
		>
			<h2 className="title">TODO</h2>

			<HeaderIcon onClick={themeToggler}/>
		</HeaderStyled>
	)
}


export { TodoHeader }
  