public class Goldfish implements Fish {
    private final String name;
    private final int swimSpeed;

    public Goldfish(String name) {
        this.name = name;
        this.swimSpeed = (int) (75 + Math.random() * 50);
    }

    @Override
    public int getSwimSpeed() {
        return swimSpeed;
    }

    @Override
    public String toString() {
        return name;
    }
}
