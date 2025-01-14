

const OptionsList = ({optionList}) => {
    
    return (
        optionList?.map( option =>
            <div className="itemOptionList">
                <div className="itemOption">
                    <p>{option.Name}</p>
                </div>
            </div>
            
        )
        
    )
}

export default OptionsList