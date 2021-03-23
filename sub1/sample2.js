let module = null;

try {
    module = await import("http://first");
} catch(e) {
    module = await import("http://second");
}