# Intro to Hotwire

## Outline

1. whoami
2. What is it?
3. Why should you use it?
3. How can you use it?
4. Hands on
5. Beyond this talk/workshop

## whoami

- Animesh Ghosh
- writing Ruby, happily, for the past ~3 years 
- works at Peach (SaaS around WhatsApp's Business APIs)
- using Hotwire for the first time in prod 😬

## The What

- Hotwire is the answer to Phoenix Liveview
- send HTML instead of JSON
- promises fast page loads, more productive development
- Single Page Application like feeling for your users

## The Why (Important)

These are what I feel why it makes sense for teams to use Hotwire, after using it at work.

1. smaller teams can't (more accurately, shouldn't) do FE-BE shenanigans
  - they should just push out features
2. you are early stage
  - biased take tbh
  - would you rather write code in two different languages or roll out features faster?
3. you don't know JS (or you know JS and don't like it 👀)

## The How

1. Turbo (Drive, Frames and Streams)
2. Stimulus (you cannot escape JS ☠️ )
3. turbo-rails - tight integration with Rails, exposes helper methods to your code for soft real-time features

## Hands on

Follow along to create the Rails app.

Main things to focus on:

- use of `turbo_frame_tag`
- use of `format.turbo_stream`
- use of `*.turbo_stream.erb`
- use of Turbo Stream actions
- use of events emitted by Turbo
- stitching together re-usable Stimulus controllers (the modest JS framework)
- use of `broadcasts_to` class method (if we get time)

## (To Infinity and) Beyond this Hotwire talk/workshop

- Turbo 8 is the cool new thing
- DOM morphing
- `broadcast_refreshes` (new features, new problems)

References:

1. https://hotwired.dev/
2. [turbo-rails](https://github.com/hotwired/turbo-rails)
3. https://www.youtube.com/watch?v=hKKycPLN-sk
4. https://dev.37signals.com/a-happier-happy-path-in-turbo-with-morphing/
