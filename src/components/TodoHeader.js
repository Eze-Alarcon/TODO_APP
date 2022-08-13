import { HeaderStyled, HeaderIcon } from "./styled/StyledComponent"

const TodoHeader = ({ loading, themeToggler, iconType }) => {

	return (
		<HeaderStyled 
			className={`${!!loading && "loading"}` }
		>
			<h2 className="title">TODO</h2>

			<HeaderIcon 
				onClick={themeToggler}
				className={iconType === 'light' ? 'light' : 'dark'}
			/>
		</HeaderStyled>
	)
}


export { TodoHeader }
  