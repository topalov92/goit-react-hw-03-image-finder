import React from 'react';

import {
    SearchbarCont,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from './Searchbar.styles';

export class Searchbar extends React.Component {
    state = {
        searchQuery: '',
    };

    handleInputValue = evt => {
        const { value } = evt.currentTarget;
        this.setState({
            searchQuery: value.toLowerCase(),
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.searchQuery);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            searchQuery: '',
        });
    };

    render() {
        return (
            <SearchbarCont>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleInputValue}
                    />
                </SearchForm>
            </SearchbarCont>
        );
    }
}
