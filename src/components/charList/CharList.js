import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { useState, useEffect, useRef } from 'react';

import Spinner from '../spiner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading , setNewItemLoading] = useState(false);
    const [offset , setOffset] = useState(210);
    const [charEnded , setcharEnded] = useState(false);

    const marvelService = new MarvelService();

    // componentDidMount() {
    //     this.onRequest();
    // }

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        // this.setState({
        //     newItemLoading : true
        // })
        setNewItemLoading(true);
    }

    const onCharListLoaded =  (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        // this.setState(({offset, charList}) => ({
        //     charList : [...charList, ...newCharList],
        //     loading : false,
        //     newItemLoading : false,
        //     offset: offset + 9,
        //     charEnded : ended
        // }))

        setCharList(charList => [...charList, ...newCharList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setcharEnded(charEnded => ended);
    }

    const onError = () => {
        // this.setState({
        //     error : true,
        //     loading: false
        // })
        setError(true);
        setLoading(loading => false);
    }

    function renderItems(arr) {
        const items =  arr.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={() => props.onCharSelected(item.id)}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }
    
    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{"display" : charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
                >
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

export default CharList;