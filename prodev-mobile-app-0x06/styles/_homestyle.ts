import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
    },
    searchGroup: {
        marginTop: 20,
        marginBottom: 20,
    },
    searchFormGroup: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 16,
        color: "#333",
    },
    searchControl: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
    },
    searchButton: {
        backgroundColor: "#34967C",
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    filterGroup: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    filterContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
        width: 72,
        height: 72,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    listingContainer: {
        flex: 1,
        marginTop: 20,
    },
    paginationContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    showMoreButton: {
        backgroundColor: "#34967C",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    showMoreButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export { styles };