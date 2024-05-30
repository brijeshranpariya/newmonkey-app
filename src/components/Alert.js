import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <>
                <div class="alert alert-warning" role="alert">
                    No articles available for this category!
                </div>

            </>
        )
    }
}
