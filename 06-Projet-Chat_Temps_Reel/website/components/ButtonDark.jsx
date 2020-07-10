
const ButtonDark = (props) => {
  return (
    <>
      <button className='btn btn-dark' {...props}>
        {props.children}
      </button>

      <style jsx>{`
                .btn {
                    cursor: pointer;
                    border: 1px solid transparent;
                    padding: .375rem .75rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    border-radius: .25rem;
                    transition: all .15s;
                    margin-top: 10px;
                    outline: none;
                }
                .btn-dark:hover {
                    color: #fff;
                    background-color: #23272b;
                    border-color: #1d2124;
                }
                .btn-dark {
                    color: #fff;
                    background-color: #343a40;
                    border-color: #343a40;
                }
            `}</style>
    </>
  )
}

export default ButtonDark
