import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            quantity: NaN
        }
    }

    render() {
        return (
            <>
                <h1>Add Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Item</label>
                    <input
                        name="name"
                        value={this.state.formData.name}
                        required
                    />
                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            name="quantity"
                            value={this.state.formData.quantity}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        ADD ITEM
                    </button>
                </form>
            </>
        )
    }

}