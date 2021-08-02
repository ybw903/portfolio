export default function LineBreaker(str: string) {
    return str.split('\n').map(line => <span>{line}<br/></span>);   
}