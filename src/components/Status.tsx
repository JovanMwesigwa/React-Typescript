type StatusProps = {
    status: 'Loading' | 'success' | 'error';
}



export const Status = (props: StatusProps) => {

    let message;

    if(props.status === 'Loading') {
        message = 'Loading'
    }else if (props.status === 'success') {
        message = 'Success'
    }else if (props.status === 'error') {
        message = 'Error fetching data'
    }

    return (
        <div>
            <h4>Status - {message}</h4>
        </div>
    )
}