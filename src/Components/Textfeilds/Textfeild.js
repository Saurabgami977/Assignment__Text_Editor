import React, { useState } from 'react';

export default function Textfeild() {

    //updating state when additional page is required
    const [page, setPage] = useState(1);

    const handleChange = (element, index) => {
        //Page will automatically takes this size if user resizes it
        element.style.height = '29.7cm';
        element.style.width = '21cm';
        //if scroll height then adding the page(state)
        if (element.scrollHeight > 1220) {
            setPage(page + 1);
            //setting timeout so that nextSibling is defined
            setTimeout(() => {
                document.getElementById(index).nextSibling.focus();
            }, 100)
        }
    }

    //Each page id into the array 
    const pages = [];

    for (let i = 1; i <= page; i++) {
        //pushing id of page into array
        pages.push('i');
    }

    return (
        <div>
            {/* mapping the page array into each textarea => Re-renders when state is updated */}
            {pages.map((page, index) => (
                <textarea
                    key={index}
                    id={index}
                    type="textArea"
                    onChange={(e) => handleChange(e.target, index)}

                    // I would have made diffrent css file but for few components I prefer inline CSS 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1cm',
                        fontSize: '24px',
                        margin: '20px auto',
                        outline: 'none',
                        width: '21cm',
                        height: '29.7cm',
                        overflow: 'hidden',
                        overflowY: 'none',
                        boxShadow: '3px 3px 3px 3px #ccc',
                    }}
                />
            ))}
        </div>
    )
}
