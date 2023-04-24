import { FormStyled, Header, Input, SerchFormButton } from './SearchBar.styled';
import { Component } from 'react';
import sprite from '../../img/sprite.svg';
import { Svg } from 'components/icon/Icon';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
    state = {
        query: '',
    };

    handleInput = e => {
        this.setState({ query: e.target.value });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        if (!this.state.query) {
            toast('Please enter a query');
            return;
        }
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
        e.target.reset();
    };

    render() {
        return (
            <Header>
                <FormStyled onSubmit={this.handleOnSubmit}>
                    <Input
                        type="text"
                        name="searchQuery"
                        autoComplete="off"
                        placeholder="Search images..."
                        onChange={this.handleInput}
                    />
                    <SerchFormButton type="submit">
                        <Svg
                            width={20}
                            height={20}
                            use={sprite + '#icon-search'}
                        />
                    </SerchFormButton>
                </FormStyled>
            </Header>
        );
    }
}
