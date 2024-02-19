import React from 'react';

//Ez kezeli a Főoldalon megjelenő Horoszkóp jegyeket
export default function ZodiacSigns() {
  // így  a props-ból, a modellek közül kiszedtem az id, name stb változókat
  //ezeket már szabadon használhatom
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 border-gray grow'>
            <img src={`https://robohash.org/${id}?size=180x180`} alt="" />
            <div>
                <h2 className='f-color'>{name}</h2>
                <p className='font-weight-bold'>SN: {serialNumber}</p>
            </div>
        </div>
    )
};
