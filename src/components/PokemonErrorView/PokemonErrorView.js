import errorImg from './error.jpg'

export default function PokemonErrorView({message}) {
    return (
        <div role="alert">
            <img src={errorImg} width="240" alt="Sad cat" />
            {message}
        </div>
    );
}