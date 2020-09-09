import useResponsive from './useResponsive';

const BREACKPOINTS = [
    { width: 400, cant: 1 },
    { width: 650, cant: 2 },
    { width: 1000, cant: 3 },
    { width: 1200, cant: 4 },
];

const useBreakpoint = () => {
    const width = useResponsive();
    for (const breackPoint of BREACKPOINTS) {
        if (width <= breackPoint.width) {

            return breackPoint.cant
        }
    }
    return 5;
}

export default useBreakpoint
