import React from 'react'

export const UserCard = ({result }) => {
    return (
        <div className="container">
            {result &&
                result.map((card) => (
                    <div className="UserCard" key={card.id}>
                        <figure>
                            <img src={`https://picsum.photos/200/300?random=${card.id}`} alt='imagen' />
                        </figure>
                        <div className="info">
                            <h2>{card.name}</h2>
                            <span>@{card.username}</span>
                            <span>{card.email}</span>
                        </div>
                    </div>
                )

                )}
        </div>
    )
}
