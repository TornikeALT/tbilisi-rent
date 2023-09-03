import React from 'react';

function ModelsSpinner() {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
        </div>
    );
}

export default ModelsSpinner;
