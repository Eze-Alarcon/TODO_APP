import { LoadingCircle, LoadingStyle, LoadingText } from "./styled/StyledComponent"

const TodosLoading = ()  => {
    return (
        <>
        <LoadingStyle>
            <LoadingCircle className="loadingEfect"/>
            <LoadingText className="loadingEfect"/>
        </LoadingStyle>
        
        <LoadingStyle>
            <LoadingCircle className="loadingEfect"/>
            <LoadingText className="loadingEfect"/>
        </LoadingStyle>
        
        <LoadingStyle>
            <LoadingCircle className="loadingEfect"/>
            <LoadingText className="loadingEfect"/>
        </LoadingStyle>
        </>
    )
}

export { TodosLoading }