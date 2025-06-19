import {View, StyleSheet, ScrollView} from 'react-native';
import { useRef, useState } from "react";
import ImageCard from "@/components/ImageCard";

export default function Carousel({recommendedCoffees}: any ) {

    const [currentPage, setCurrentPage] = useState(0);
    const scrollRef = useRef(null);
    const screenWidth = 265;

    const handleScroll = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const page = Math.round(offsetX / screenWidth);
        setCurrentPage(page);
    };

    return (
        <>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    style={{ marginBottom: 10 }}
                >
                    {recommendedCoffees.map((coffee: any, index: number) => (
                        <View key={index + 'recommended' + coffee.name + coffee.id} style={{ width: screenWidth }}>
                            <View style={styles.recommendedRow}>
                                <ImageCard name={coffee.name} image={coffee.imageUrl} />
                            </View>
                        </View>
                    ))}
                </ScrollView>

            {/* Dots */}
            <View style={styles.dotsContainer}>
                {recommendedCoffees.map((_: any, index: number) => (
                    <View
                        key={'carousel' + index}
                        style={[
                            styles.dot,
                            { opacity: currentPage === index ? 1 : 0.3 },
                        ]}
                    />
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginHorizontal: 4,
    },
    recommendedRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,

    },
});